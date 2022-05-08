import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img className="w-10 mb-1 mr-4" src="/assets/images/logo/logo512.png" />
      <div className="font-Oleo ">{AppConfig.site_name}</div>
    </span>
  );
};

export { Logo };
