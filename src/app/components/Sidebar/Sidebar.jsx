import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from '../SidebarOption/SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import './sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<AddIcon fontSize="large" />}>Compose</Button>
      <SidebarOption selected={true} title="Inbox" Icon={InboxIcon} number="100" />
      <SidebarOption title="Starred" Icon={StarIcon} number="100" />

      <SidebarOption title="Snoozed" Icon={AccessTimeIcon} number="100" />
      <SidebarOption title="Important" Icon={LabelImportantIcon} number="100" />
      <SidebarOption title="Sent" Icon={NearMeIcon} number="100" />
      <SidebarOption title="More" Icon={ExpandMoreIcon} number="100" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
