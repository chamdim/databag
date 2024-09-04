import React, { useState, useContext } from 'react'
import { Text, Button } from '@mantine/core'
import { AppContext } from '../context/AppContext'
import { DisplayContext } from '../context/DisplayContext';
import { ContextType } from '../context/ContextType'
import classes from './Session.module.css'
import { IconAddressBook, IconMessages, IconSettings } from '@tabler/icons-react'
import { Settings } from '../settings/Settings';
import { Identity } from '../identity/Identity';

export function Session() {
  const [ tab, setTab ] = useState('channels');
  const app = useContext(AppContext) as ContextType
  const display = useContext(DisplayContext) as ContextType

  return (
    <div className={classes.session}>
      { display.state.layout === 'small' && (
        <>
          <div className={classes.screen}>
            <Button onClick={app.actions.accountLogout}>Session Logout</Button>
            { tab === 'settings' && (
              <Settings />
            )}
          </div>
          <div className={classes.tabs}>
            { tab === 'channels' && (
              <div className={classes.activeTabItem}><IconMessages className={classes.tabIcon} /></div>
            )}
            { tab !== 'channels' && (
              <div className={classes.idleTabItem} onClick={() => setTab('channels')}><IconMessages className={classes.tabIcon} /></div>
            )}
            <div className={classes.tabDivider} />
            { tab === 'contacts' && (
              <div className={classes.activeTabItem}><IconAddressBook className={classes.tabIcon} /></div>
            )}
            { tab !== 'contacts' && (
              <div className={classes.idleTabItem} onClick={() => setTab('contacts')}><IconAddressBook className={classes.tabIcon} /></div>
            )}
            <div className={classes.tabDivider} />
            { tab === 'settings' && (
              <div className={classes.activeTabItem}><IconSettings className={classes.tabIcon} /></div>
            )}
            { tab !== 'settings' && (
              <div className={classes.idleTabItem} onClick={() => setTab('settings')}><IconSettings className={classes.tabIcon} /></div>
            )}
          </div>
        </>
      )}
      { display.state.layout === 'large' && (
        <div className={classes.display}>
          <div className={classes.left}>
            <Identity />
          </div>
          <div className={classes.right}>
          </div>
        </div>
      )}
    </div>
  );
}


