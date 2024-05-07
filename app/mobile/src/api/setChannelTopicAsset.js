import { checkResponse, fetchWithTimeout } from './fetchUtil';

export async function setChannelTopicSubject(token, channelId, topicId, asset) {
  const insecure = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|:\d+$|$)){4}$/.test(server);
  const protocol = insecure ? 'http' : 'https';

  if (asset.image) {
    const formData = new FormData();
    formData.append('asset', asset.image);
    let transform = encodeURIComponent(JSON.stringify(["ithumb;photo", "icopy;photo"]));
    let topicAsset = await fetch(`/content/channels/${channelId}/topics/${slot.id}/assets?transforms=${transform}&agent=${token}`, { method: 'POST', body: formData });
    checkResponse(topicAsset);
    let assetEntry = await topicAsset.json();
    return {
      image: {
        thumb: assetEntry.find(item => item.transform === 'ithumb;photo').assetId,
        full: assetEntry.find(item => item.transform === 'icopy;photo').assetId,
      }
    };
  }
  else if (asset.video) {
    const formData = new FormData();
    formData.append('asset', asset.video);
    let thumb = 'vthumb;video;' + asset.position;
    let transform = encodeURIComponent(JSON.stringify(["vlq;video", "vhd;video", thumb]));
    let topicAsset = await fetch(`/content/channels/${channelId}/topics/${slot.id}/assets?transforms=${transform}&agent=${token}`, { method: 'POST', body: formData });
    checkResponse(topicAsset);
    let assetEntry = await topicAsset.json();
    return {
      video: {
        thumb: assetEntry.find(item => item.transform === thumb).assetId,
        lq: assetEntry.find(item => item.transform === 'vlq;video').assetId,
        hd: assetEntry.find(item => item.transform === 'vhd;video').assetId,
      }
    };
  }
  else if (asset.audio) {
    const formData = new FormData();
    formData.append('asset', asset.audio);
    let transform = encodeURIComponent(JSON.stringify(["acopy;audio"]));
    let topicAsset = await fetch(`/content/channels/${channelId}/topics/${slot.id}/assets?transforms=${transform}&agent=${token}`, { method: 'POST', body: formData });
    checkResponse(topicAsset);
    let assetEntry = await topicAsset.json();
    return {
      audio: {
        label: asset.label,
        full: assetEntry.find(item => item.transform === 'acopy;audio').assetId,
      }
    };
  }
}
