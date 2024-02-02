/* eslint-disable react/require-default-props */
/* eslint-disable max-len */

const InputButton = (props:{ loading?:boolean }) => {
  const { loading } = props;
  return (
    <input disabled={loading} type="submit" style={{ backgroundColor: 'var(--clr-primary)' }} className="text-white rounded-md cursor-pointer text-center w-full p-4 " />
  );
};

export default InputButton;
