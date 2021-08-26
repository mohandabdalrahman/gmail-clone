import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import InfoIcon from '@material-ui/icons/Info';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import './Mail.css';
import { useHistory } from 'react-router-dom';
const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <InfoIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>

        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>subject</h2>
          <LabelImportantIcon className="mail__label" />
          <p>title</p>
          <p className="mail__time">time</p>
        </div>
      </div>
      <div className="mail__message">
        <p> this is message</p>
      </div>
    </div>
  );
};

export default Mail;
