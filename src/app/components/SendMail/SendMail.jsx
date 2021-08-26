import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './SendMail.css';

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form>
        <input placeholder="To" type="text" />
        <input placeholder="Subject" type="text" />
        <input className="sendMail__message" placeholder="Message" type="text" />
        <div className="sendMail__options">
          <Button className="sendMail__button">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
