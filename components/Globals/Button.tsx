type Text = {
  t: string;
};

const Button: React.FunctionComponent<Text> = (text) => {
  const { t } = text;
  return (
    <button
      className='text-xs mx-auto border-2 rounded-full border-primary-900 hover:border-primary-500 font-extrabold text-primary-100 hover:text-primary-500
    bg-primary-900 hover:bg-primary-100 p-2 px-4 transition-colors'
    >
      {t}
    </button>
  );
};

export default Button;
