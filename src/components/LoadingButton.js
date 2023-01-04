import Loader from 'react-loader-spinner';

export default function LoadingButton({ children, isLoading }) {
  return (
    <>
      {!isLoading ? (
        <>{children}</>
      ) : (
        <Loader
          type="ThreeDots"
          height="20"
          width="50"
          color="gray"
          ariaLabel="bars-loading"
          wrapperStyle={{ textAlign: 'center' }}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
}
