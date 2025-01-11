import Avatar from "@mui/material/Avatar/Avatar";
import ProfilePic from "../assets/profile_pic.jpg";
import { Box, Divider } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
const SideBar = () => {
  return (
    <div className="flex flex-col gap-1 py-2 px-16">
      <Avatar src={ProfilePic} sx={{ width: 200, height: 200 }} />
      <div className="text-left">
        <h1 className="text-2xl font-bold">Joel Acquah</h1>
        <p className="text-gray-600">Software Engineer</p>
        <p className=" text-sm">
          Building apps and software solutions | Mobile | Web | Backend 🚀
        </p>
      </div>
      <Box m={1} />
      <Divider />
      <Box m={1} />
      {/* Address and contacts */}

      <div>
        <div className="flex flex-row gap-2">
          <LocationOnOutlinedIcon sx={{ width: 20 }} />
          <p className="text-sm">Accra, Ghana</p>
        </div>
        <div className="flex flex-row gap-2">
          <EmailOutlinedIcon sx={{ width: 20 }} />
          <a className="text-sm" href="mailto:joelaj06@gmail.com">
            joelaj06@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <InsertLinkOutlinedIcon sx={{ width: 20 }} />
          <a
            className="text-sm"
            href="www.linkedin.com/in/joel-acquah-367702263V"
          >
            Joel Acquah
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
