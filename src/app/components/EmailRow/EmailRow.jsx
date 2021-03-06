import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import "./EmailRow.css";
import { useHistory } from 'react-router-dom';

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  return (
    <div className="emailRow" onClick={() => history.push('/mail')}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">
        {title}
      </h3>

      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__description">
          {description}
        </span>
      </div>

      <p className="emailRow__time">
        {time}
      </p>
    </div>
  );
};

export default EmailRow;
