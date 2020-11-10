// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import {addDecorator} from '@storybook/react';

import IntlProvider from 'src/components/intl_provider';

import {browserHistory} from 'src/utils/browser_history';

import configureStore from 'src/store';

import {resetTheme} from 'src/utils/utils';

import state from './state';
const store = configureStore(state);

import 'src/sass/styles.scss';
import 'src/storybook/styles.scss';

resetTheme();

addDecorator((storyFn) => (
    <Provider store={store}>
        <IntlProvider>
            <Router history={browserHistory}>
                <div style={{background: 'white'}}>
                    {storyFn()}
                </div>
            </Router>
        </IntlProvider>
    </Provider>
));
