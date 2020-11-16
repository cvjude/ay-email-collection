import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import Logo from '../../assets/logo.png';
import ChartCard from '../../components/ChartCard';
import T from '../../components/Table';
import Pdf from '../../assets/icons/pdf';
import Csv from '../../assets/icons/csv';
import Print from '../../assets/icons/print';
import { axiosInstance } from '../../helpers';
import './style.scss';

const Reports = ({ sidebar }) => {
  const [saleReport, setSaleReport] = useState([]);
  const [loading, setLoading] = useState(true);

  const date = moment().format('YYYY-MM-DD');

  useEffect(() => {
    setLoading(true);

    (async () => {
      const report = await axiosInstance.get('/email');
      setLoading(false);

      setSaleReport(report.data.data);
    })();

    return () => {};
  }, []);

  const printpdf = () => {
    let doc = new jsPDF();
    doc.addImage(Logo, 'png', 20, 10, 50, 100);
    doc.autoTable({
      html: '#sale-report-table',
      headStyles: { fillColor: [250, 109, 130] },
      margin: { top: 30 },
    });

    doc.save(`all-users-${date}.pdf`);
  };

  const print = (print) => {
    let doc = new jsPDF();
    doc.addImage(Logo, 'png', 20, 10, 80, 15);
    doc.autoTable({
      html: '#sale-report-table',
      headStyles: { fillColor: [250, 109, 130] },
      margin: { top: 30 },
    });

    doc.autoPrint();
    doc.output('dataurlnewwindow');
  };

  const Loader = () => {
    return (
      <div
        className="spinner2"
        style={{ minHeight: '500px', width: '100%' }}
      ></div>
    );
  };

  return (
    <section className="reports ">
      <div className="dsl report_sec">
        <div className="flx">
          <div></div>
          <div className="icons">
            <div className="md-x" onClick={print}>
              <Print />
            </div>
            <div className="md-x" onClick={printpdf}>
              <Pdf />
            </div>
            <div className="md-x" onClick={printpdf}>
              <CSVLink
                filename={`all-users-${date}.csv`}
                data={
                  saleReport?.map((rep, i) => ({
                    'S/N': i + 1,
                    Date: rep?.createdAt,
                    Name: rep?.fullName,
                    Email: rep?.email,
                    'Phone Number': rep?.phoneNumber,
                  })) || []
                }
              >
                <Csv />
              </CSVLink>
            </div>
          </div>
        </div>

        {loading ? (
          <Loader small />
        ) : (
          <ChartCard data={saleReport} useShadow={false} loading={loading}>
            <T.Table
              id="sale-report-table"
              keys={['S/N', 'Date', 'Name', 'Email', 'Phone Number']}
              className=""
            >
              {({ keys }) => (
                <T.Body keys={keys}>
                  {saleReport.map((data, i) => {
                    return (
                      <T.Trow
                        key={`mkeys_${i}`}
                        values={{
                          'S/N': i + 1,
                          Date: moment(data?.createdAt).format('DD-MMM-yyyy'),
                          Name: data?.fullName,
                          Email: (
                            <a href={`mailto:${data?.email}`}>{data?.email}</a>
                          ),
                          'Phone Number': (
                            <a href={`tell:${data?.phoneNumber}`}>
                              {data?.phoneNumber}
                            </a>
                          ),
                        }}
                      />
                    );
                  })}
                </T.Body>
              )}
            </T.Table>
          </ChartCard>
        )}
      </div>
    </section>
  );
};

export default Reports;
