reearth.ui.show(
  `
<style>
  :root {
    --primary6: #1677FF;
    --primary5: #40a9ff;
    --primary7: #0958d9;
    --primary1: #e6f4ff;
    --black: #000000;
    --primary-black: #262626;
    --primary-light: #BFBFBF;
    --light-text-weak: #8C8C8C;
    --neutral-5: #D9D9D9;
    --divider: #E0E0E0;
    --neutral-2: #FAFAFA;
    --neutral-3: #F5F5F5;
    --neutral-4: #F0F0F0;
    --white: #ffffff;
  }

  a{
    color: var(--light-text-weak);
  }

    a:hover{
    color: var(--primary6);
  }


  html,
  body {
    margin: 0;
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--primary-black);
  }

  ._hide {
    display: none;
  }

  ._show {
    display: flex;
  }

  #wrapper {
    height: 100%;
    border-radius: 1px;
    width: 100%;
    background-color: var(--neutral-4);
    padding-bottom: 12px;
  }

  #header {
    background: white;
    color: var(--primary6);
    padding: 16px 24px;
  }

  .title {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;

  }

  p {
    display: inline-block;
  }

  .content-wrapper {
    margin: 12px;
    border-radius: 4px;
    background-color: var(--white);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  }

  .content-wrapper--title {
    font-family: 'Noto Sans';
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    text-align: left;
    border-bottom: 1px solid var(--divider);
    padding: 12px;
  }


  .location-wrapper {
    margin: 12px 0px
  }

  .location-wrapper--box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }

  .btn-location {
    width: 32px;
    height: 32px;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0834 5.24996C11.0834 5.34803 11.08 5.44529 11.0732 5.54163L11.0614 5.67678C11.0239 6.03801 10.9392 6.38525 10.8138 6.71226C9.80954 10.0238 7.00008 12.8333 7.00008 12.8333C7.00008 12.8333 4.19062 10.0238 3.18638 6.71226C3.06092 6.38525 2.97631 6.03801 2.93879 5.67678L2.927 5.54163C2.92021 5.44529 2.91675 5.34803 2.91675 5.24996C2.91675 2.9948 4.74492 1.16663 7.00008 1.16663C9.25524 1.16663 11.0834 2.9948 11.0834 5.24996ZM7.00008 6.99996C7.96658 6.99996 8.75008 6.21646 8.75008 5.24996C8.75008 4.28346 7.96658 3.49996 7.00008 3.49996C6.03358 3.49996 5.25008 4.28346 5.25008 5.24996C5.25008 6.21646 6.03358 6.99996 7.00008 6.99996Z" fill="%23262626"/></svg>') no-repeat center;
    border: 1px solid var(--neutral-5);
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    border-radius: 2px;
  }

  .btn-location:focus {
    background: url('data:image/svg+xml,<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.99963 -0.000183105C4.54147 0.00154703 3.14353 0.581565 2.11246 1.61264C1.08138 2.64372 0.501364 4.04166 0.499634 5.49982C0.499634 10.2059 5.49963 13.7606 5.71252 13.9095C5.79672 13.9683 5.89694 13.9998 5.99963 13.9998C6.10233 13.9998 6.20255 13.9683 6.28674 13.9095C6.49963 13.7606 11.4996 10.2059 11.4996 5.49982C11.4979 4.04166 10.9179 2.64372 9.88681 1.61264C8.85573 0.581565 7.45779 0.00154687 5.99963 -0.000183105V-0.000183105ZM6 3.5C6.39556 3.5 6.78224 3.6173 7.11114 3.83706C7.44004 4.05682 7.69638 4.36918 7.84776 4.73463C7.99913 5.10008 8.03874 5.50222 7.96157 5.89018C7.8844 6.27814 7.69392 6.63451 7.41421 6.91421C7.13451 7.19392 6.77814 7.3844 6.39018 7.46157C6.00222 7.53874 5.60009 7.49913 5.23463 7.34776C4.86918 7.19638 4.55682 6.94004 4.33706 6.61114C4.1173 6.28224 4 5.89556 4 5.5C3.99999 5.23735 4.05172 4.97728 4.15223 4.73462C4.25273 4.49197 4.40005 4.27149 4.58577 4.08577C4.77149 3.90005 4.99197 3.75273 5.23462 3.65222C5.47728 3.55172 5.73735 3.49999 6 3.5V3.5Z" fill="%2340A9FF" /></svg>') no-repeat center;
    border: 1px solid var(--primary5);
  }

  #inputXY {
    color: var(--primary-black);
    border: 1px solid var(--neutral-5);
    border-radius: 2px;
    height: 28px;
    width: calc(100%);
    padding-left: 12px;
  }

  input[type="text"] ::placeholder {
    color: var(--primary-light);
  }

  .weak-text {
    margin: 0;
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: var(--light-text-weak);
  }

  .input-wrapper {
    padding: 12px;
    gap: 4px;
  }

  #level-select {
    width: 100%;
    padding: 5px 16px 5px 16px;
    margin-top: 4px;
    color: var(--primary-black);
    border-radius: 2px;
    border: 1px solid rgba(217, 217, 217, 1);
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.016);
  }

  .contents {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    gap: 8px;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .table-contents {
    margin: 12px;
    padding-bottom: 12px;
    white-space: nowrap;
  }

  .point-wrap {
    width: 50%;
    padding: 5px 12px;
  }

  #BP-table {
    border-radius: 2px;
  }

  #BP-table--header {
    display: flex;
    align-items: center;
    background-color: var(--neutral-2);
    border: 1px solid var(--neutral-4);
    padding: 4px;
    border-radius: 2px 2px 0 0;
  }

  #bplistTbody {
    height: 132px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    padding: 4px;
    border-right: 1px solid var(--neutral-4);
    border-left: 1px solid var(--neutral-4);
    border-bottom: 1px solid var(--neutral-4);
    border-radius: 0 0 2px 2px;
  }

  .point-list--wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .point-list--wrap:hover {
    border-radius: 8px;
    background-color: var(--primary1);
  }

  .point_selected {
    border-radius: 8px;
    background-color: var(--primary1);
  }

  #maxTime {
    width: 40px;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    color: var(--primary-black);
    text-align: right;
  }

  #timeLine-box {
    flex-direction: column;
    gap: 16px;
    padding: 12px 0;
  }

  .time-text--box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
  }

  .btns-time {
    display: flex;
    padding: 0 8px;
    gap: 24px;
  }

  .btns-time button {
    width: 32px;
    height: 32px;
    border-radius: 2px;
    border: none;
    background: no-repeat center center;
  }

  #playButton {
    background: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7584 15.5535L10.9256 8.10655C10.8387 8.04626 10.7359 8.00999 10.6285 8.00178C10.5211 7.99358 10.4134 8.01377 10.3175 8.0601C10.2215 8.10642 10.141 8.17707 10.0849 8.26417C10.0289 8.35126 9.99949 8.45138 10 8.55337V23.4472C10 23.9009 10.5415 24.1572 10.9256 23.894L21.7584 16.4471C21.8332 16.3961 21.8941 16.3289 21.9361 16.2513C21.9781 16.1736 22 16.0876 22 16.0003C22 15.913 21.9781 15.827 21.9361 15.7493C21.8941 15.6716 21.8332 15.6045 21.7584 15.5535Z" fill="%23262626" /></svg>');
  }

  #playButton:hover {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="2" fill="%23E6F4FF"/><path d="M21.7584 15.5535L10.9256 8.10655C10.8387 8.04626 10.7359 8.00999 10.6285 8.00178C10.5211 7.99358 10.4134 8.01377 10.3175 8.0601C10.2215 8.10642 10.141 8.17707 10.0849 8.26417C10.0289 8.35126 9.99949 8.45138 10 8.55337V23.4472C10 23.9009 10.5415 24.1572 10.9256 23.894L21.7584 16.4471C21.8332 16.3961 21.8941 16.3289 21.9361 16.2513C21.9781 16.1736 22 16.0876 22 16.0003C22 15.913 21.9781 15.827 21.9361 15.7493C21.8941 15.6716 21.8332 15.6045 21.7584 15.5535Z" fill="%231677FF"/></svg>');
  }

  #pauseButton {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M13.1056 8L10.3611 8.00001C10.1625 8.00001 10 8.18001 10 8.40001V23.6C10 23.82 10.1625 24 10.3611 24L13.1056 24C13.3042 24 13.4667 23.82 13.4667 23.6V8.4C13.4667 8.18 13.3042 8 13.1056 8ZM22.6389 8.00001H19.8944C19.6958 8.00001 19.5333 8.18001 19.5333 8.40001V23.6C19.5333 23.82 19.6958 24 19.8944 24H22.6389C22.8375 24 23 23.82 23 23.6V8.40001C23 8.18001 22.8375 8.00001 22.6389 8.00001Z" fill="%23262626"/></svg>');
  }

  #pauseButton:hover {
    background: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="2" fill="%23E6F4FF" /><path d="M13.1056 8L10.3611 8.00001C10.1625 8.00001 10 8.18001 10 8.40001V23.6C10 23.82 10.1625 24 10.3611 24L13.1056 24C13.3042 24 13.4667 23.82 13.4667 23.6V8.4C13.4667 8.18 13.3042 8 13.1056 8ZM22.6389 8.00001H19.8944C19.6958 8.00001 19.5333 8.18001 19.5333 8.40001V23.6C19.5333 23.82 19.6958 24 19.8944 24H22.6389C22.8375 24 23 23.82 23 23.6V8.40001C23 8.18001 22.8375 8.00001 22.6389 8.00001Z" fill="%231677FF" /></svg>');
  }


  .range-list {
    padding: 0 12px;
  }

  .range-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  .range-item:last-of-type {
    margin-bottom: 0;
  }

  .range-item div {
    width: 24px;
    height: 24px;
  }


  .close-btn {
    width: 32px;
    height: 32px;
    padding: 2.4px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    border: 1px solid var(--primary6);
    background: var(--primary6);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
    border: 0px solid var(--neutral-5);
  }

  .open-btn {
    display: none;
    width: 32px;
    height: 32px;
    padding: 2.4px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    border: 1px solid var(--primary6);
    background: var(--primary6);
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
    border: 0px solid var(--neutral-5);
  }


  #check-rangelayer {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    margin: 4px 8px 4px 0;
  }


  .btn-disable {
    border: 1px solid var(--neutral-5);
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.016);
    color: var(--primary-light);
    background: var(--neutral-3);
  }

  .btn-active {
    color: var(--white);
    background: var(--primary6);
    border: 1px solid var(--primary6);
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.043);
  }

  .btn-active:hover {
    background: var(--primary5);
    border: 1px solid var(--primary5);
    box-shadow: none
  }

  .btn-active:active {
    background: var(--primary7);
    border: 1px solid var(--primary7);
    box-shadow: none
  }

  #btn-get-bp {
    width: 100%;
    height: 38px;
    padding: 8px 16px 8px 16px;
    margin-bottom: 12px;
    text-align: center;
    border-radius: 4px;
  }

  #btn-clear {
    width: 100%;
    height: 38px;
    padding: 8px 16px 8px 16px;
    text-align: center;
    border-radius: 4px;
    background-color: var(--white);
    border: 1px solid var(--neutral-5);
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.016);
  }

  #btn-clear:hover {
    color: #40A9FF;
    border: 1px solid #40A9FF
  }

  #btn-clear:active {
    color: #40A9FF;
    border: 1px solid #40A9FF
  }

  #btn-animation {
    width: 100%;
    height: 38px;
    padding: 8px 16px 8px 16px;
    text-align: center;
    border-radius: 4px;
    margin-top: 12px;
  }

  #content-message {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    padding: 16px 0;
    font-family: Noto Sans;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: var(--light-text-weak);
  }

  #alert_text {
    margin: auto 24px;
  }


  #run_text--box {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  #run_text--animation {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    transform: rotate(45deg);
    gap: 12px;
  }

  #run_text--animation div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  #circle_1 {
    animation: spin1 1.5s linear infinite;
    background-color: #9AD0FF;
  }

  #circle_2 {
    animation: spin2 1.5s linear infinite;
    background-color: #7DC1FF;
  }

  #circle_3 {
    animation: spin3 1.5s linear infinite;
    background-color: #5DB0FF;
  }

  #circle_4 {
    animation: spin4 1.5s linear infinite;
    background-color: #3995FF;
  }


  #run_text {
    color: var(--primary6);
  }

  @keyframes spin1 {
    0% {
      background-color: #9AD0FF;
    }

    25% {
      background-color: #7DC1FF;
    }

    50% {
      background-color: #5DB0FF;
    }

    75% {
      background-color: #3995FF;
    }

    100% {
      background-color: #9AD0FF;
    }
  }


  @keyframes spin2 {
    0% {
      background-color: #3995FF;
    }

    25% {
      background-color: #9AD0FF;
    }

    50% {
      background-color: #7DC1FF;
    }

    75% {
      background-color: #5DB0FF;
    }

    100% {
      background-color: #3995FF;
    }
  }


  @keyframes spin3 {
    0% {
      background-color: #5DB0FF;
    }

    25% {
      background-color: #3995FF;
    }

    50% {
      background-color: #9AD0FF;
    }

    75% {
      background-color: #7DC1FF;
    }

    100% {
      background-color: #5DB0FF;
    }
  }


  @keyframes spin4 {
    0% {
      background-color: #3995FF;
    }

    25% {
      background-color: #9AD0FF;
    }

    50% {
      background-color: #7DC1FF;
    }

    75% {
      background-color: #5DB0FF;
    }

    100% {
      background-color: #3995FF;
    }
  }


  /* timeline player */
  #container {
    display: flex;
    margin: 0 12px;
    color: var(--primary-black);
    gap: 8px;
  }

  #current-time-display {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--neutral-5);
    flex-shrink: 0;
  }

  #spantime {
    font-family: "Noto Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }

  #timeslider {
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--neutral-5);
  }

  #ruler {
    height: 100%;
  }

  #ruler-top {
    height: 0;
  }

  #time-list {
    display: flex;
    justify-content: space-between;
    height: 30%;
    width: 208px;
    padding: 0 10px;
    align-items: end;
    overflow: hidden;
  }

  .hour {
    border-left: 1px solid #878282;
    height: 10px;
    line-height: 0;
    font-size: 0;
    color: transparent;
  }

  #ruler-end-time {
    float: right;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
  }

  #ruler-start-time {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
  }

  /*Slider*/
  .slider {
    -webkit-appearance: none;
    width: 220px;
    height: 0px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0);
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;
    position: absolute;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 26px;
    border: 0;
    background: url('data:image/svg+xml,<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C16 12.4183 8 25.5 8 25.5C8 25.5 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="%231677FF"/></svg>');
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 16px;
    height: 26px;
    border: 0;
    background: url('data:image/svg+xml,<svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8C16 12.4183 8 25.5 8 25.5C8 25.5 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="%231677FF"/></svg>');
    cursor: pointer;
  }

  .license{
    margin: 0 12px;
    padding: 0;
    color: var(--light-text-weak);
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 18px;
  }
</style>

<body>
  <button type="button" class="open-btn" style="display: none; border: none;" onclick="openWrapper()">
    <span role="img" aria-label="menu" class="anticon anticon-menu">
      <svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em" height="1em" fill="currentColor"
        aria-hidden="true">
        <path
          d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
        </path>
      </svg></span></button>

  <div id="wrapper">
    <div>
      <button type="button" class="close-btn" style="position: absolute; right: 0px; border-radius: 0px;"
        onclick="openWrapper()">
        <span role="img" aria-label="close" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false"
            data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path
              d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
            </path>
          </svg>
        </span>
      </button>
    </div>

    <div id="header">
      浸水ナビ
    </div>

    <div class="content-wrapper">
      <div class="content-wrapper--title">検索条件</div>
      <div class="input-wrapper">
        <label for="level-select">降雨規模の選択</label>
        <select name="rangelayer" id="level-select" onchange="checkRangeLayer()">
          <option value="L2">L2:想定最大規模</option>
          <option value="L1">L1:計画規模</option>
          <option value="L1b">L1b:降雨規模未区分</option>
        </select>

        <div class="location-wrapper">
          <label for="inputXY">任意の地点を選択</label>
          <div class="location-wrapper--box">
            <input type="text" id="inputXY" placeholder="右ボタンをクリックして地点を選択">
            <button class="btn-location" onclick="getLocation()"></button>
          </div>

          <input type="checkbox" id="check-rangelayer" onclick="checkRangeLayer()" checked>
          <label for="check-rangelayer">検索可能範囲を表示</label>
          <p class="weak-text">選択された地点は、検索可能範囲内でなければ破堤点情報を取得できません</p>
        </div>
        <div align="center">
          <input class="btn-disable" type="button" id="btn-get-bp" value="破堤点の取得" onclick="getBP()">
          <input type="button" id="btn-clear" onclick="clearContents()" value="検索のクリア">
        </div>

      </div>
    </div>

    <div class="content-wrapper ">
      <div class="content-wrapper--title">検索結果</div>

      <div id="content-message" style="display: flex;">
        <p id="default_text" style="display: block;">結果なし</p>
        <div id="run_text--box" style="display:none;">
          <div id="run_text--animation">
            <div id="circle_1"></div>
            <div id="circle_2"></div>
            <div id="circle_3"></div>
            <div id="circle_4"></div>
          </div>
          <p id="run_text">検索中です、しばらくお待ちください</p>

        </div>

        <p class="weak-text" id="alert_text" style="display:none;">
          選択された地点は、検索可能範囲外のため破堤点情報を取得できませんでした。</p>
      </div>

      <div class="table-contents" id="BP-listTable" style="display: none;">

        <div id="BP-table">
          <div id="BP-table--header">
            <div class="point-wrap title">
              <span>破堤点番号</span>
            </div>
            <div class="point-wrap title">
              <span>河川名</span>
            </div>

          </div>

          <div id="bplistTbody"> </div>


          <div id="bpInfobody" style="display: none">
            <div class="contents">

              <div class="title">破堤点情報</div>

              <div class="info">
                <div class="weak-text">登録河川名</div>
                <div id="info-bpriver" data-oldlyrid>No selected data</div>
              </div>
            </div>
          </div>

          <div align="center">
            <input type="button" value="浸水シミュレーション実行" id="btn-animation" class="btn-disable" disabled=true>
          </div>

        </div>
      </div>

    </div>

    <div class="content-wrapper _hide" id="timeLine-box">
      <div class="content-wrapper--title">浸水シミュレーション</div>

      <!-- timeline -->
      <div class="time-text--box">
        <div class="btns-time">
          <button id="pauseButton">
          </button>
          <button id="playButton">
          </button>
        </div>


        <div>破堤から <span id="maxTime">00:00</span> 後 </div>
      </div>

      <div id="container">
        <div id="current-time-display">
          <div id="spantime" class="timerDisplay">00:00</div>
        </div>
        <div id="timeslider">
          <div id="ruler">
            <div id="ruler-top">
              <span id="ruler-start-time">00:00</span>
              <span id="ruler-end-time"></span>
            </div>
            <div>
              <input type="range" class="slider" id="input-bptime" list="time-list" step="1" data-oldlyrid=""
                oninput="changeTime(this)" value="0">
            </div>
            <datalist id="time-list">
            </datalist>

          </div>
        </div>
      </div>

      <div class="range-list">
        <div class="title" style="margin-bottom: 12px;">浸水ランク</div>

        <div class="range-item">
          <div style="background-color: #F6F3A7;"></div>
          <span>0.0ｍ ～ 0.5ｍ未満</span>
        </div>

        <div class="range-item">
          <div style="background-color: #FED3BB;"></div>
          <span>0.5ｍ ～ 3.0ｍ未満</span>
        </div>
        <div class="range-item">
          <div style="background-color: #FDAFAF;"></div>
          <span>3.0ｍ ～ 5.0ｍ未満</span>

        </div>
        <div class="range-item">
          <div style="background-color: #FC8888;"></div>
          <span>5.0ｍ ～ 10.0ｍ未満</span>
        </div>
        <div class="range-item">
          <div style="background-color: #ED7CBF;"></div>
          <span>10.0ｍ ～ 20.0ｍ未満</span>
        </div>
        <div class="range-item">
          <div style="background-color: #D471D2;"></div>
          <span>20.0ｍ以上</span>
        </div>
      </div>
    </div>
    <p class="license">出典 : 浸水ナビ <a href="https://suiboumap.gsi.go.jp/" target="_blank" rel="noopener noreferrer">(https://suiboumap.gsi.go.jp/)</a></p>
          <p class="license">地理院タイル （破堤点別時系列タイル・洪水浸水想定区域図検索可能範囲）を加工して作成</p>
  </div>
</body>
<script>

  let reearth, layers, stageCZML, riskObj, property;
  let expanded = false;

  const inputTimeList = document.getElementById("time-list");
  const inputBPtimeRange = document.getElementById("input-bptime");
  let spanHour, spanMinute;

  const elemSelectLevel = document.getElementById("level-select");

  const tableRef = document.querySelector('#bplistTbody')

  tableRef.addEventListener('click', (event) => {
    let childEl = event.target.parentElement.classList.contains('point-list--wrap')
    let parentEl = event.target.classList.contains('point-list--wrap')


    if (childEl || parentEl) {
      const previouslySelected = document.querySelector('.point_selected');
      if (previouslySelected) {
        previouslySelected.classList.remove('point_selected');
      }
    }
    if (childEl) {
      event.target.parentElement.classList.add('point_selected');
    } else if (parentEl) {
      event.target.classList.add('point_selected');
    }
  })

  const animation = document.getElementById("btn-animation").addEventListener('click', () => {
    document.getElementById("timeLine-box").classList.toggle("_hide")
    document.getElementById("timeLine-box").classList.toggle("_show")
  })


  function getLocation() {
    parent.postMessage({ type: "mouseClick" }, "*");
  };

  function checkRangeLayer() {
    const elemCheckRangeLayer = document.getElementById("check-rangelayer");
    if (elemCheckRangeLayer.checked) {
      const rangeLabel = elemSelectLevel.value;
      parent.postMessage({
        type: "showRangeLayer",
        label: rangeLabel
      }, "*");
    } else {
      parent.postMessage({
        type: "hideRangeLayer"
      }, "*");
    }
  };

  async function getBP() {
    const xyValue = document.getElementById("inputXY").value;

    if (!xyValue) {
      document.getElementById("alert_text").style = "display:block;"
    } else {
      document.getElementById("alert_text").style = "display: none;"
      document.getElementById("default_text").style = "display: none;"
      document.getElementById("run_text--box").style = "display: flex;"

      // Does it needed to deactivated btn-get-bp? 
      document.getElementById('btn-get-bp').classList.remove("btn-active")
      document.getElementById('btn-get-bp').classList.add("btn-disable")
      document.getElementById('btn-get-bp').disabled = true;


      checkRangeLayer()
      await refleshBPList();


      let url = "https://suiboumap.gsi.go.jp/shinsuimap/Api/Public/GetBreakPoint?lon=" + xyValue.split(",")[0] + "&lat=" + xyValue.split(",")[1];
      await fetchData(url).then(data => {
        if (!data) return
        if (data.length === 0) {
          document.getElementById("run_text--box").style = "display: none;"
          document.getElementById("default_text").style = "display: none;"
          document.getElementById("alert_text").style = "display: block;"
          return
        } else {

          let filteredBpData = [];

          let pointScale;
          if (elemSelectLevel.value === "L2") {
            pointScale = 0;
          } else if (elemSelectLevel.value === "L1") {
            pointScale = 1;
          } else if (elemSelectLevel.value === "L1b") {
            pointScale = -1;
          }

          // filtering points by Selection of rainfall scale
          data.forEach((point) => {
            if (point.CSVScale === pointScale) {
              filteredBpData.push(point);
            }
          });

          const folderId = document.getElementById("BP-listTable").dataset.folderId;

          for (let i = 0; i < filteredBpData.length; i++) {
            const bpMarkerId = addBPmarker(filteredBpData[i], folderId);
            addBPlist(i, filteredBpData[i], bpMarkerId);
          }

          document.getElementById('btn-get-bp').classList.remove("btn-active")
          document.getElementById('btn-get-bp').classList.add("btn-disable")
          document.getElementById('btn-get-bp').disabled = true;

          document.getElementById("run_text--box").style = "display: none;"
          document.getElementById("content-message").style = "display: none;"
          document.getElementById("BP-listTable").style = "display: block;"
        }
      });
    }


  }

  async function refleshBPList() {

    // reflesh marker folder
    const oldFolder = reearth.layers.findAll(e => e.title === "_pluginBPFolder");
    if (oldFolder) {
      for (i of oldFolder) {
        for (j of i.children) {
          reearth.layers.hide(j.id);
        }
      };
    }


    NewFolder = reearth.layers.add({
      extensionId: "",
      isVisible: true,
      title: "_pluginBPFolder",
      children: [],
      tags: [],
    });

    document.getElementById("BP-listTable").dataset.folderId = NewFolder;

    // refresh table
    document.getElementById("run_text--box").style = "display: flex;"
    document.getElementById("content-message").style = "display: flex;"
    document.getElementById("BP-listTable").style = "display: none;"

    const pointList = document.querySelectorAll(".point-list--wrap")
    pointList.forEach((item) => {
      item.remove()
    })

    return true;
  };



  function addBPlist(no, BP, markerid) {

    let pointBPName = document.createElement('div')
    pointBPName.classList.add("point-wrap")
    pointBPName.textContent = BP.BPName

    let pointEntryRiverName = document.createElement('div')
    pointEntryRiverName.classList.add("point-wrap")
    pointEntryRiverName.textContent = BP.EntryRiverName

    let pointListWrap = document.createElement('div')
    pointListWrap.classList.add("point-list--wrap")
    pointListWrap.id = "point" + no
    pointListWrap.setAttribute("name", "break-point")
    pointListWrap.setAttribute("onclick", "selectBPRadio(this)")

    pointListWrap.appendChild(pointBPName)
    pointListWrap.appendChild(pointEntryRiverName)
    tableRef.appendChild(pointListWrap)

    let bptime = "0";
    for (t of BP.BPTime) {
      bptime = bptime + "," + t
    }


    let elemBPselect = document.getElementById('point' + no);
    elemBPselect.dataset.bpname = BP.BPName;
    elemBPselect.dataset.rivername = BP.EntryRiverName;
    elemBPselect.dataset.id = BP.ID;
    elemBPselect.dataset.bplocation = BP.BPLocation;
    elemBPselect.dataset.bplat = BP.BPLat;
    elemBPselect.dataset.bplon = BP.BPLon;
    elemBPselect.dataset.officecode = BP.OfficeCode;
    elemBPselect.dataset.rivercode = BP.RiverCode;
    elemBPselect.dataset.subrivercode = BP.SubRiverCode;
    elemBPselect.dataset.markerid = markerid;
    elemBPselect.dataset.bptime = bptime;
    elemBPselect.dataset.layerid = markerid;
  };


  function addBPmarker(BP, folderId) {
    const tableItem = [{
      "item_title": "破堤点番号",
      "item_datatype": "string",
      "item_datastr": BP.BPName
    }, {
      "item_title": "破堤点ID",
      "item_datatype": "string",
      "item_datastr": BP.ID
    }, {
      "item_title": "破堤点の位置",
      "item_datatype": "string",
      "item_datastr": BP.BPLocation
    }, {
      "item_title": "緯度",
      "item_datatype": "string",
      "item_datastr": BP.BPLat
    }, {
      "item_title": "経度",
      "item_datatype": "string",
      "item_datastr": BP.BPLon
    }, {
      "item_title": "河川名",
      "item_datatype": "string",
      "item_datastr": BP.EntryRiverName
    }, {
      "item_title": "河川コード",
      "item_datatype": "string",
      "item_datastr": BP.RiverCode
    }, {
      "item_title": "河川コード枝番",
      "item_datatype": "string",
      "item_datastr": BP.SubRiverCode
    }, {
      "item_title": "事業所コード",
      "item_datatype": "string",
      "item_datastr": BP.OfficeCode
    }];


    const infoBlock = [{
      "pluginId": "reearth",
      "extensionId": "dlblock",
      "property": {
        "default": {
          "title": "破堤点情報"
        },
        "items": tableItem
      }
    }];

    let pointColor = "#0000ff"

    // 最大浸水をもたらす破堤点の場合、マーカーを赤にする
    if (BP.isDepthMax) {
      pointColor = "#ff0000"
    }

    const newBPMarker = reearth.layers.add({
      id: "BP_" + BP.BPName,
      extensionId: "marker",
      type: "marker",
      isVisible: true,
      title: BP.Name,
      property: {
        default: {
          location: {
            lat: BP.BPLat,
            lng: BP.BPLon
          },
          heightReference: "relative",
          height: 15,
          label: true,
          style: "point",
          pointColor: pointColor,
          pointOutlineColor: "#fff",
          pointSize: 10,
          labelText: BP.BPName,
          labelPosition: "top",
          labelTypography: {
            "fontFamily": null,
            "fontWeight": null,
            "fontSize": 16,
            "color": null,
            "textAlign": null,
            "bold": null,
            "italic": null,
            "underline": null
          }
        }
      },
      infobox: {
        blocks: infoBlock,
        property: {
          default: {
            title: BP.BPName,
            size: "small",
            bgcolor: "#ffffffff",
            typography: {
              "fontFamily": null,
              "fontWeight": null,
              "fontSize": null,
              "color": "#000000",
              "textAlign": null,
              "bold": null,
              "italic": null,
              "underline": null
            }
          }
        }
      },
      tags: [],
    }, folderId);
    return newBPMarker;
  }



  function selectBPRadio(elem) {
    document.getElementById('btn-animation').disabled = false;
    document.getElementById('btn-animation').classList.remove("btn-disable")
    document.getElementById('btn-animation').classList.add("btn-active")

    document.getElementById("bpInfobody").style = "display: block"
    document.getElementById('info-bpriver').innerHTML = elem.dataset.rivername;

    // // 新旧レイヤID 
    const oldLyrId = document.getElementById("info-bpriver").dataset.oldlyrid;
    const lyrId = elem.dataset.layerid;
    document.getElementById("info-bpriver").dataset.oldlyrid = lyrId;

    const lyrLocation = { lat: elem.dataset.bplat, lng: elem.dataset.bplon };

    parent.postMessage({
      type: "selectBP",
      lyrLocation: lyrLocation,
      oldLyrId: oldLyrId,
      lyrId: lyrId
    }, "*");

    // create options in datalist
    const bpTime = elem.dataset.bptime.split(",");
    const inputTimeList = document.getElementById("time-list");

    spanHour = Math.floor(bpTime[bpTime.length - 1] / 60);
    spanMinute = bpTime[bpTime.length - 1] % 60;

    document.getElementById("ruler-end-time").textContent = spanHour + ":" + spanMinute;


    clearSelect(inputTimeList);
    animationTimeList = [];
    for (let i = 0; i < bpTime.length; i++) {
      let tempValue = (bpTime[i] / bpTime.slice(-1)[0]) * (bpTime.length - 1);
      addlist(tempValue, inputTimeList);
      animationTimeList.push(bpTime[i]);
    }
  };

  // アニメーション
  let currentIndex;
  let intervalId;
  let animationTimeList = [];
  let bpInfo = {};



  function changeTimeAnimation(spanTime) {
    spanHour = Math.floor(spanTime / 60);
    spanMinute = spanTime % 60;

    document.getElementById('spantime').innerHTML = spanHour + ":" + spanMinute;
    document.getElementById('maxTime').innerHTML = spanHour + ":" + spanMinute;

    let timeValue = ('00000' + spanTime).slice(-5);
    let bpurl = bpInfo["bpurl"] + timeValue + "m/{z}/{x}/{y}.png";

    parent.postMessage({
      type: "loadBPTile",
      bpTileUrl: bpurl
    }, "*");

  }

  function displayNextItem() {

    currentIndex++;
    if (currentIndex >= animationTimeList.length) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }


    changeTimeAnimation(animationTimeList[currentIndex]);
    if (currentIndex > 1) {
      inputBPtimeRange.stepUp(1)
    }
  }

  document.getElementById('playButton').addEventListener('click', function () {
    // 既に再生中の場合は何もしない
    if (intervalId) return;

    currentIndex = 1;
    loadBPTile()
    intervalId = setInterval(displayNextItem, 1000);
  });

  document.getElementById('pauseButton').addEventListener('click', function () {
    // タイマーをクリアして再生を停止する
    clearInterval(intervalId);
    intervalId = null;
    inputBPtimeRange.value = "0"
    document.getElementById("spantime").innerHTML = "00:00"
    document.getElementById("maxTime").innerHTML = "00:00"
  });


  function loadBPTile() {
    const selectBP = document.querySelector(".point_selected")

    const selectBPofficeCode = selectBP.dataset.officecode;
    const selectLevel = document.getElementById("level-select").value;
    let selectBPrivercode = selectBP.dataset.rivercode;
    const selectBPsubrivercode = selectBP.dataset.subrivercode;
    if (selectBPsubrivercode != "_") {
      selectBPrivercode = selectBPrivercode + selectBPsubrivercode
    }
    const selectBPbpname = selectBP.dataset.bpname;
    let bpurlString = "https://suiboumap.gsi.go.jp/shinsuimap/Tile/" + selectBPofficeCode + "/" + selectLevel + "/" + selectBPrivercode + "/" + selectBPbpname + "/" + selectBPbpname + "_";
    const bpurl = bpurlString + "00010" + "m/{z}/{x}/{y}.png";


    // //animation setting
    let bpTime = selectBP.dataset.bptime.split(",");
    let inputTime = inputBPtimeRange;
    bpInfo["bpurl"] = bpurlString;
    bpInfo["bptime"] = selectBP.dataset.bptime;
    bpInfo["min"] = bpTime[0];
    bpInfo["max"] = bpTime.length - 1;
    bpInfo["value"] = bpTime[1];
    inputTime.dataset.bpurl = bpurlString;
    inputTime.dataset.bptime = selectBP.dataset.bptime;
    inputTime.min = bpTime[0];
    inputTime.max = bpTime.length - 1;
    inputTime.value = bpTime[1];

    //タブ切り替え
    inputTime.value = 1

    spanHour = Math.floor(bpTime[1] / 60);
    spanMinute = bpTime[1] % 60;
    document.getElementById("spantime").innerHTML = spanHour + ":" + spanMinute;
    document.getElementById("maxTime").innerHTML = spanHour + ":" + spanMinute;

    // 新旧レイヤID 
    let oldLyrId = inputTime.dataset.oldlyrid;
    const lyrId = selectBP.dataset.layerid;
    inputTime.dataset.oldlyrid = lyrId;
    let lyrLocation = { lat: selectBP.dataset.bplat, lng: selectBP.dataset.bplon };

    // post message

    parent.postMessage({
      type: "loadBPTile",
      bpTileUrl: bpurl
    }, "*");

  };


  function addlist(value, selector) {
    //option要素を新しく作る
    const option1 = document.createElement('option');
    //option要素にvalueと表示名を設定
    option1.value = value;
    option1.textContent = value;
    option1.classList.add("hour")
    //select要素にoption要素を追加する
    selector.appendChild(option1);
  }


  // clear select
  function clearSelect(x) {
    if (x.hasChildNodes()) {
      while (x.childNodes.length > 0) {
        x.removeChild(x.firstChild)
      }
    }
  }


  function changeTime(elem) {

    let bpTime = document.querySelector(".point_selected").dataset.bptime.split(",");

    let spanTime = bpTime[elem.value];

    let spanHour, spanMinute;
    spanHour = Math.floor(spanTime / 60);
    spanMinute = spanTime % 60;


    document.getElementById("spantime").innerHTML = spanHour + ":" + spanMinute;
    document.getElementById("maxTime").innerHTML = spanHour + ":" + spanMinute;

    let timeValue = ('00000' + bpTime[elem.value]).slice(-5);
    let bpurl = elem.dataset.bpurl + timeValue + "m/{z}/{x}/{y}.png";

    parent.postMessage({
      type: "loadBPTile",
      bpTileUrl: bpurl
    }, "*");

  }


  async function fetchData(url) {
    // if (!property) return Promise.resolve();
    return fetch(url).then(r => {
      if (r.ok) return r.json();
    }).then(r => {
      if (!r) return;
      fetchedData = r;
      return fetchedData;
    });
  };


  function clearContents() {
    document.getElementById("check-rangelayer").checked = true;
    document.getElementById("inputXY").value = "右ボタンをクリックして地点を選択";

    //BPリストのリセット
    refleshBPList()

    document.getElementById("btn-get-bp").classList.remove("btn-active")
    document.getElementById("btn-get-bp").classList.add("btn-disable")
    document.getElementById("btn-get-bp").disabled = true;


    //Resetting breach point information
    document.getElementById("info-bpriver").innerHTML = "No selected data";

    //Reset animated text
    document.getElementById("BP-listTable").style = "display: none;"
    document.getElementById("alert_text").style = "display: none;"
    document.getElementById("run_text--box").style = "display: none;"

    document.getElementById("default_text").style = "display: block;"
    document.getElementById("content-message").style = "display: flex";
    document.getElementById("timeLine-box").classList.remove("_show");
    document.getElementById("timeLine-box").classList.add("_hide");

    document.getElementById("spantime").innerHTML = "00:00";
    document.getElementById("maxTime").textContent = "00:00"

     //Reset time bar range
    clearSelect(inputTimeList);

    // removeAttribute in input type range
    inputBPtimeRange.removeAttribute("data-oldlyrid")
    inputBPtimeRange.removeAttribute("data-bpurl")
    inputBPtimeRange.removeAttribute("data-bptime")
    inputBPtimeRange.removeAttribute("min")
    inputBPtimeRange.removeAttribute("max")

    // post message
    parent.postMessage({ type: "clear", }, "*");

  }


  function openWrapper() {
    let openBtn = document.getElementsByClassName("open-btn")[0];
    let ElemWrapper = document.getElementById("wrapper");
    if (openBtn.style.display == "none") {
      openBtn.style.display = "block"
      ElemWrapper.style.display = "none"
    } else {
      openBtn.style.display = "none"
      ElemWrapper.style.display = "block"
    }
    expanded = !expanded
    parent.postMessage({ type: "resize", expanded }, "*");
  };


  window.addEventListener("message", e => {
    if (e.data.type == "property") {
      if (e.source !== parent) return;
      reearth = e.source.reearth;
      layers = reearth.layers.layers;
      property = e.data.property;

    } else if (e.data.type == "mousedata") {
      let locateY, locateX;
      let mousedata = e.data.payload;

      locateY = parseFloat(mousedata.lat.toFixed(5));
      locateX = parseFloat(mousedata.lng.toFixed(5));

      document.getElementById("inputXY").value = locateX + "," + locateY;

      if (mousedata) {
        document.getElementById("btn-get-bp").classList.remove("btn-disable")
        document.getElementById("btn-get-bp").classList.add("btn-active")
        document.getElementById("btn-get-bp").disabled = false;
      }
    }
  });



</script>

`,
  { width: 350, height: 662 }
);

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    type: "property",
    layers: reearth.layers.layers,
    property: reearth.widget.property,
  });
}

reearth.on("message", (msg) => {
  if (msg.type === "mouseClick") {
    reearth.on("doubleclick", (mousedata) => {
      locateY = parseFloat(mousedata.lat.toFixed(5));
      locateX = parseFloat(mousedata.lng.toFixed(5));

      const selected = reearth.layers.find((e) => e.title === "_selectedPoint");
      if (selected === undefined) {
        let startMarker = reearth.layers.add({
          id: "startPoint",
          extensionId: "marker",
          type: "marker",
          isVisible: true,
          title: "_selectedPoint",
          property: {
            default: {
              location: {
                lat: locateY,
                lng: locateX,
              },
              heightReference: "relative",
              height: 15,
              label: false,
              style: "point",
              pointColor: "#ff0000",
              pointSize: 20,
              labelText: "",
            },
          },
        });
      } else {
        reearth.layers.overrideProperty(selected.id, {
          default: {
            location: {
              lat: locateY,
              lng: locateX,
            },
          },
        });
        reearth.layers.show(selected.id);
      }

      reearth.ui.postMessage(
        {
          type: "mousedata",
          payload: mousedata,
        },
        "*"
      );
    });
  } else if (msg.type == "showRangeLayer") {
    let tileList = reearth.scene.property.tiles;
    let newTileList = [];
    for (i of tileList) {
      if (i.id === "shinsuiRangeTile") {
        tileFlag = true;
      } else {
        newTileList.push(i);
      }
    }
    const newTile = {
      id: "shinsuiRangeTile",
      tile_type: "url",
      tile_url:
        "https://suiboumap.gsi.go.jp/shinsuimap/Tile/rangelayer/" +
        msg.label +
        "/{z}/{x}/{y}.png",
      tile_opacity: 0.7,
    };
    newTileList.push(newTile);
    reearth.scene.overrideProperty({
      tiles: newTileList,
    });
  } else if (msg.type == "loadBPTile") {
    let tileList = reearth.scene.property.tiles;

    // load Tile
    let newTileList = [];
    for (i of tileList) {
      if (i.id === "shinsuiBPTile") {
      } else {
        newTileList.push(i);
      }
    }
    const newTile = {
      id: "shinsuiBPTile",
      tile_type: "url",
      tile_url: msg.bpTileUrl,
      tile_opacity: 0.7,
    };
    newTileList.push(newTile);

    reearth.scene.overrideProperty({
      tiles: newTileList,
    });
  } else if (msg.type == "selectBP") {
    if (msg.lyrLocation) {
      //zoom to layer
      reearth.camera.flyTo(
        {
          lat: +msg.lyrLocation.lat, // degrees
          lng: +msg.lyrLocation.lng, // degrees
          height: 1000,
        },
        {
          duration: 1, // seconds
        }
      );

      //change point color
      reearth.layers.overrideProperty(msg.oldLyrId, {
        default: {
          pointColor: "#0000ff",
        },
      });
      reearth.layers.overrideProperty(msg.lyrId, {
        default: {
          pointColor: "#f3f71c",
        },
      });
    }
  } else if (msg.type == "hideRangeLayer") {
    let tileList = reearth.scene.property.tiles;
    let newTileList = [];
    for (i of tileList) {
      if (i.id === "shinsuiRangeTile") {
        i.tile_url = "";
      } else {
        newTileList.push(i);
      }
    }
    reearth.scene.overrideProperty({
      tiles: newTileList,
    });
  } else if (msg.type == "clear") {
    let tileList = reearth.scene.property.tiles;
    let newTileList = [];
    for (i of tileList) {
      if (i.id === "shinsuiRangeTile" || i.id === "shinsuiBPTile") {
        i.tile_url = "";
      } else {
        newTileList.push(i);
      }
    }
    reearth.scene.overrideProperty({
      tiles: newTileList,
    });

    const selected = reearth.layers.find((e) => e.title === "_selectedPoint");
    if (selected != undefined) {
      reearth.layers.hide(selected.id);
    }
    // reflesh marker folder
    const oldFolder = reearth.layers.findAll(
      (e) => e.title === "_pluginBPFolder"
    );
    for (i of oldFolder) {
      for (j of i.children) {
        reearth.layers.hide(j.id);
      }
    }
  } else if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 32 : 350,
      msg.expanded ? 32 : 662,
      msg.expanded ? undefined : true
    );
  }
});
