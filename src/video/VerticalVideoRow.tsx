import className from 'classnames';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description?: string;
  video: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
};

const VerticalVideoRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-2/5 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        {props.description && (
          <div className="mt-6 text-xl leading-9">{props.description}</div>
        )}

        {props.children}
      </div>

      <div className="w-full sm:w-3/5 h-96 p-6">
        <iframe src={props.video} className="w-full h-full" />
      </div>
    </div>
  );
};

export { VerticalVideoRow };
