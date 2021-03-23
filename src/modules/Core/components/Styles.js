import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /** Colors **/
    --green: #41c300;
    --red: #f44336;
    --blue: #019aff;
    --yellow: #ffc100;
    --black: #222831;
    --darkGrey: #393e46;
    --lightGrey: #EFEFEF;
    --white: #EEE;

    /** Theme **/
    --error: var(--red);
    --warning: var(--yellow);
    --success: var(--green);
    --info: var(--blue);
    --foreground: var(--white);
    --background: var(--lightGrey);
    --textColor: var(--darkGrey);
    --buttonTextColor: var(--darkGrey);
    --lineColor: var(--darkGrey);

    /** Fonts **/
    --headingFont: "Space Mono", monospace;
    --bodyFont: "Work Sans", "Helvetica Neue", sans-serif;

    /** Typography **/
    --heading1: 2.4em;
    --heading2: 2em;
    --heading3: 1.6em;
    --heading4: 1.2em;
    --heading5: 1em;
    --heading6: .8em;
    --smallText: 1.2em;
    --lineHeightTitle: 1.25;
    --lineHeightText: 1.50;

    /** Spacing **/
    --defaultSpacing: 2rem;
    --defaultBorderSize: 4px;
  }

  /** Roots **/
  * {
    box-sizing: border-box;
  }

  html {
    color: var(--textColor);
    line-height: var(--lineHeightText);
    height: 100%;

    /** REM Hack for 1rem = 10px **/
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-size: 1.6em;
    background-color: var(--lightGrey);
  }

  #root {
    height: 100%;
  }

  /** Headings **/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-family: var(--headingFont);
    line-height: var(--lineHeightTitle);
    margin: 0;
  }

  h1 {
    font-size: var(--heading1);
  }

  h2 {
    font-size: var(--heading2);
  }

  h3 {
    font-size: var(--heading3);
  }

  h4 {
    font-size: var(--heading4);
  }

  h5 {
    font-size: var(--heading5);
  }

  h6 {
    font-size: var(--heading6);
  }

  /** Horizontal Rule **/
  hr {
    margin: var(--defaultSpacing) 0;
    border: var(--defaultBorderSize) solid var(--info);
    border-top: none;
  }

  ul,
  ol {
    padding: 0 var(--defaultSpacing);
    margin: 0;
    margin-bottom: var(--defaultSpacing);
  }

  /** Links **/
  a {
    color: var(--info);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /** General **/
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  /** Form Defaults **/
  form,
  fieldset {
    display: flex;
    flex-direction: column;
  }

  form>*:not(:last-child),
  fieldset>*:not(:last-child):not(legend) {
    margin-bottom: var(--defaultSpacing);
  }

  label>span {
    width: max-content;
    display: block;
  }

  input:not([type="checkbox"]),
  select,
  textarea {
    padding: 3px 8px;
    padding-top: 6px;
    border: 1px solid var(--darkGrey);
    min-width: 25rem;
  }

  legend {
    padding: 0 1rem;
    font-size: var(--heading4);
  }

  fieldset {
    border: var(--defaultBorderSize) solid var(--info);
    margin-bottom: var(--defaultSpacing);
    padding: var(--defaultSpacing);
  }

  textarea {
    resize: vertical;
  }

  input[type="checkbox"] {
    transform: scale(2);
    margin: .6rem;
  }

  ::-moz-selection {
    background: var(--info);
    text-shadow: none;
  }

  ::selection {
    background: var(--info);
    text-shadow: none;
  }
`;
