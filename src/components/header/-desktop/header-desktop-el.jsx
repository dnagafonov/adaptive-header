import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  basic: {
    maxWidth: "1200px",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
}));

const HeaderDesktopEl = memo(({ array }) => {
    return (
        <div>
            
        </div>
    );
});

HeaderDesktopEl.propTypes = {
    
};

export default HeaderDesktopEl;