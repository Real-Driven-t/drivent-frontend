import { ThreeDots } from 'react-loader-spinner';

export default function LoadingButton({ children }, isLoading) {
  return (
    <>
      {children}
      <ThreeDots height="10" width="80" radius="9" color="#4fa94d" visible={true} />
    </>
  );
}
