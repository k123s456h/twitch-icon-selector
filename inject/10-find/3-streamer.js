////////////////////////////////////////

/**
 * live, vod, popout에 따라서 현재 시청중인 스트리머 아이디를 설정한다.
 * 
 * 그리고 로컬 저장소에서 불러온 값을 이용해서 
 * icons, iconStats 변수를 설정한다. 
 */
const find_3_streamer = async () => {
  if(fail)
  {
    logger.info(`[find_2_elements]`, error);
    return;
  }

  try 
  { 
    if(isPopout)
    {
      /**
       * https://www.twitch.tv/popout/streamer/chat
       */
      watchingStreamer = location.href.split("/").slice(-2)[0];
    }
    else if(isVod)
    {
      /**
       * https://www.twitch.tv/videos/video_id_numbers
       */
      watchingStreamer = profileArea.href.split("/").pop().split("?")[0];
    }
    else if(isClip)
    {
      /**
       * https://www.twitch.tv/streamer/clip/clip_id
       */
      watchingStreamer = location.href.split("twitch.tv/").pop().split("/")[0];
    }
    else if(isLive) // live
    {
      /**
       * https://www.twitch.tv/streamer?asdf
       */
      watchingStreamer = location.href.split("/").pop().split("?")[0];
    }

    /**
     * TEST CODE
     */
    if(watchingStreamer === "k123s456h") watchingStreamer = "funzinnu";
    
    if(!streamers.includes(watchingStreamer))
    {
      fail = true;
      error = `${watchingStreamer} is not in our whitelist`;
      logger.info(error);
      return [fail, error];
    }
    if(!tagCommandEnabledStreamers.includes(watchingStreamer))
    {
      logger.info(`${watchingStreamer} does not support tag commands.`)
    }
    logger.debug(`[find_3_streamer] ${watchingStreamer}`);
  
    icons = chromeLocalData.iconMetadata[watchingStreamer].icons;
    iconStats = chromeLocalData.iconStats[watchingStreamer];

    logger.info(`[find_3_streamer] loaded total ${icons.length} icons and statistics`, iconStats);

    return [icons, iconStats];
  }
  catch(err)
  {
    fail = true;
    error = err;
  }
  finally
  {
    return;
  }
}

////////////////////////////////////////