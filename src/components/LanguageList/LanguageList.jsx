
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const LanguageList = () => {
    const [lang, setLang] = useState("en");
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    },[i18n, lang]);

    const handleChange = (event) => {
        setLang(event.target.value);
    };

    return (
      <div>
        <Select
          value={lang}
          onChange={handleChange}
          sx={{
            outline: "none",
            color: "rgb(219, 167, 22)",
            "& svg": {
              fill: "rgb(219, 167, 22)",
            },
            ".MuiOutlinedInput-notchedOutline": { borderStyle: "none" },
          }}
        >
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"ua"}>UA</MenuItem>
        </Select>
      </div>
    );
}

export default LanguageList;