import React from 'react';
import './style.scss';

const Loader = () => <div className="spinner2 img"></div>;

const ChartCard = ({
  id = '',
  className = '',
  children,
  data,
  header = '',
  loading,
  title,
  useShadow = true,
}) => {
  return (
    <div
      className={`chart_card${
        useShadow ? ' shadow_div' : ''
      } flex-col al-start ${className}`}
    >
      {header && <div className="chart_header">{header}</div>}

      <div className="chart_sec">
        {!loading ? (
          (Array.isArray(data) && data?.length > 0) || !Array.isArray(data) ? (
            <>
              {id && <div id={id} key={title} className="img"></div>}
              {children}
            </>
          ) : (
            <div className="flex-row img">
              <p style={{ color: '#626262' }}>No Data to Display Yet</p>
              <label id={id} style={{ display: 'none' }}></label>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ChartCard;
