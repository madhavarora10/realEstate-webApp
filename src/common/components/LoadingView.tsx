const LoadingView = (props: any) => {
  const {
    loading,
  } = props;

  if (!loading) {
    return null;
  }

  // const progressTemplate = (
  //   <ProgressSpinner
  //     className="!stroke-kt-primary !opacity-100"
  //     strokeWidth="4"
  //   />
  // );

  return (
    'spinner'
  );
};

export { LoadingView };
