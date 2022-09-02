const SELECTOR_HEIGHT = 200;

////////////////////////////////////////
// element selectors

const rightColumnSelector = `.right-column`;

// 생방송 채팅창 숨김 감지 위한 선택자
const streamChatSelector = `.stream-chat`;
const hiddenChatSelector = `[data-test-selector="stream-chat-hidden-state"]`;

const chatAreaSelector = `.video-chat__message-list-wrapper ul, .chat-scrollable-area__message-container`;
const chatScrollSelector = `div[data-a-target='chat-scroller'] .simplebar-scroll-content`;

const chatBodySelector = `.video-chat__message > span:nth-child(2), [data-test-selector="chat-line-message-body"]`;
const chatTextSelector = `.text-fragment`;

/**
 * innerText 속성으로 값을 얻을 수 있는, `메시지 보내기`가 placeholder로 적혀있는 요소
 */
const inputAreaSelector = `[data-a-target="chat-input"]`;

/**
 * 전체 채팅 공간
 */
const inputAreaParentSelector = `.chat-room__content`;
// const inputAreaContentSelector = `[data-a-target="chat-input-text"]`;

/**
 * 채팅 보내기 버튼
 */
const inputSendButtonSelector = `[data-a-target="chat-send-button"]`;

/**
 * 아이콘 선택기 창이 표시될 때 위치의 기준이 될 요소 
 */
const iconSelectorPositionSelector = `.chat-input`;

const iconAreaSelector = `.chat-input__input-icons`;
const profileAreaSelector = `[data-a-target="watch-mode-to-home"]`;

const offlineSelector = `.channel-status-info--offline`;

const logger = {
  debug: console.debug.bind(window.console, "[ICON Selector][DEBUG] "),
  info: console.info.bind(window.console, "[ICON Selector][INFO] "),
  log: console.log.bind(window.console, "[ICON Selector][LOG] "),
  error: console.error.bind(window.console, "[ICON Selector][ERROR] "),
  warn: console.warn.bind(window.console, "[ICON Selector][WARN] "),
}


const tagCommandEnabledStreamers = [
  "funzinnu"
]

/**
 * 실행 중에 변경될 일 없는 변수 선언
 */
const init_1_constants = async () => {
  logger.debug("[init_1_constants]");
  return;
}

////////////////////////////////////////
