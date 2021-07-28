import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicIconURL from './music/music.png';
import musicInsetIconURL from './music/music-small.svg';

import penIconURL from './pen/pen.png';
import penInsetIconURL from './pen/pen-small.svg';

import videoSensingIconURL from './videoSensing/video-sensing.png';
import videoSensingInsetIconURL from './videoSensing/video-sensing-small.svg';

import text2speechIconURL from './text2speech/text2speech.png';
import text2speechInsetIconURL from './text2speech/text2speech-small.svg';

import translateIconURL from './translate/translate.png';
import translateInsetIconURL from './translate/translate-small.png';

import makeymakeyIconURL from './makeymakey/makeymakey.png';
import makeymakeyInsetIconURL from './makeymakey/makeymakey-small.svg';

import microbitIconURL from './microbit/microbit.png';
import microbitInsetIconURL from './microbit/microbit-small.svg';
import microbitConnectionIconURL from './microbit/microbit-illustration.svg';
import microbitConnectionSmallIconURL from './microbit/microbit-small.svg';

import ev3IconURL from './ev3/ev3.png';
import ev3InsetIconURL from './ev3/ev3-small.svg';
import ev3ConnectionIconURL from './ev3/ev3-hub-illustration.svg';
import ev3ConnectionSmallIconURL from './ev3/ev3-small.svg';

import wedo2IconURL from './wedo2/wedo.png'; // TODO: Rename file names to match variable/prop names?
import wedo2InsetIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionIconURL from './wedo2/wedo-illustration.svg';
import wedo2ConnectionSmallIconURL from './wedo2/wedo-small.svg';
import wedo2ConnectionTipIconURL from './wedo2/wedo-button-illustration.svg';

import boostIconURL from './boost/boost.png';
import boostInsetIconURL from './boost/boost-small.svg';
import boostConnectionIconURL from './boost/boost-illustration.svg';
import boostConnectionSmallIconURL from './boost/boost-small.svg';
import boostConnectionTipIconURL from './boost/boost-button-illustration.svg';

import gdxforIconURL from './gdxfor/gdxfor.png';
import gdxforInsetIconURL from './gdxfor/gdxfor-small.svg';
import gdxforConnectionIconURL from './gdxfor/gdxfor-illustration.svg';
import gdxforConnectionSmallIconURL from './gdxfor/gdxfor-small.svg';

import junkbotImage from './junkbot/CodeBrick.png';
import junkbotInsetImage from './junkbot/icon_1024.png';
import junkbotConnectionIconURL from './junkbot/jb-icon.svg';
import junkbotConnectionSmallIconURL from './junkbot/junkbot_icon.png';

export default [
  {
      name: 'Junkbot',
      extensionId: 'junkbot',
      collaborator: 'Junkbot',
      iconURL: junkbotImage,
      insetIconURL: junkbotInsetImage,
      description: (
          <FormattedMessage
              defaultMessage="Connect your projects with the world."
              description="Description for the 'Junkbot' extension"
              id="gui.extension.junkbot.description"
          />
      ),
      featured: true,
      disabled: false,
      bluetoothRequired: true,
      internetConnectionRequired: true,
      launchPeripheralConnectionFlow: true,
      useAutoScan: false,
      connectionIconURL: junkbotConnectionIconURL,
      connectionSmallIconURL: microbitConnectionSmallIconURL,
      connectingMessage: (
          <FormattedMessage
              defaultMessage="Connecting"
              description="Message to help people connect to their Junkbot."
              id="gui.extension.junkbot.connectingMessage"
          />
      ),
      helpLink: 'https://junkbot.co'
  }
];
