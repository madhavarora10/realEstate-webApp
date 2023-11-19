import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(dateString);
};

const CalendarContainer: React.FC = () => (
  <Space className=" w-full" direction="vertical">
    <DatePicker className=" p-2 w-full" onChange={onChange} />
  </Space>

);

export default CalendarContainer;
