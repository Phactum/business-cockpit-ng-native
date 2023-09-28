import User from './User';
import { useAppContext } from '../../AppContext';
import { Anchor, Box, Grid, Text } from 'grommet';
import { Logout, Projects, Stakeholder, Task } from 'grommet-icons';
import { MenuItem } from './MenuItem';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useNavigate } from 'react-router-dom';

i18n.addResources('en', 'menu', {
      "logout": "Logout",
      "user-profile": "User profile",
      "tasklist": "Tasks",
      "workflowlist": "Workflows",
      "READONLY": "read-only",
    });
i18n.addResources('de', 'menu', {
      "logout": "Abmelden",
      "user-profile": "Benutzerprofil",
      "tasklist": "Aufgaben",
      "workflowlist": "Vorgänge",
      "READONLY": "nur lesend",
    });

const Menu = () => {
  
  const { state, showMenu } = useAppContext();
  const { t } = useTranslation('menu');
  const { t: tApp } = useTranslation('app');
  const navigate = useNavigate();
  
  const hideMenu = () => showMenu(false);
  
  return (
      <Grid
          pad="small"
          gap="small">
        {
          !Boolean(state.currentUser) ? '' :
          <>
            <User
                user={ state.currentUser! } />
            {
              state.currentUser!.roles!.length !== 0
                  ? <Box
                        align="center"
                        gap='small'
                        direction='row'>
                      <Stakeholder />
                      <Box>{
                        state.currentUser!.roles!.map(role => t(role)).join(', ')
                      }</Box>
                    </Box>
                  : <></>
            }
            <MenuItem
                roles={ null }
                onClick={() => {
                  hideMenu();
                  navigate(tApp('url-tasklist') as string);
                }}>
              <Task />
              <Text>{t('tasklist')}</Text>
            </MenuItem>
            <MenuItem
                roles={ null }
                onClick={() => {
                  hideMenu();
                  navigate(tApp('url-workflowlist') as string);
                }}>
              <Projects />
              <Text>{t('workflowlist')}</Text>
            </MenuItem>
            <MenuItem
                background="light-3"
                roles={ null }
                onClick={ () => document.forms["logoutForm"].submit() }>
              <Logout />
              <Text>{t('logout')}</Text>
              <form action="/logout" method="POST" id="logoutForm"></form>
            </MenuItem>
          </>
        }
        <Text margin={ { top: 'medium' } }>{tApp('title.long')}</Text>
        <Anchor target='_blank' href={ state.appInformation?.homepageUrl }>{ state.appInformation?.homepageUrl }</Anchor>
        <Text margin={ { top: 'medium' } }>Version { state.appInformation!.version }</Text>
      </Grid>);
    
}

export { Menu };
