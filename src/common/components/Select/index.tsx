/* eslint-disable no-var */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import { Select } from 'antd';

type SelectProps = {
  options? :any,
  className?:string,
  placeholder?:string,
  func?:(value:object)=>void,
  label:string
};
export const SelectDefault = (props:SelectProps) => {
  const {
    options,
    className,
    placeholder,
    func,
    label,
  } = props;
  const onChange = (value:string) => {
    const setLabel = label.split(' ').join('');
    var ret = {};
    ret[setLabel] = value;
    func(ret);
  };
  return (
    <div>
      <div className=" flex justify-content-center">
        <Select
          className={className}
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={onChange}
          // onSearch={onSearch}
          filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
          options={options}
        />

      </div>
    </div>
  );
};
