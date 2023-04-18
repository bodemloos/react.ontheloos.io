import "./intro.spinner.scss";

interface IProps {
  title: string;
}

const IntroSpinner = ({ title }: IProps) => {
  return (
    <div id="intro-spinner">
      <div></div>
      <label>{title}</label>
    </div>
  );
};

export { IntroSpinner };
