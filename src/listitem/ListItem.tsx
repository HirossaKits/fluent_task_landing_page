import className from 'classnames';

type Props = {
  img: string;
  label: string;
};

const ListItem = (props: Props) => {
  return (
    <div className="flex justify-start items-center mb-2">
      <img src={props.img} className="w-8 mr-4" />
      <div className='className="mt-6 text-xl leading-9"'>{props.label}</div>
    </div>
  );
};

export { ListItem };
