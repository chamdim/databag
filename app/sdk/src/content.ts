import { EventEmitter } from 'eventemitter3';
import type { Content, Account, Logging } from './api';
import type { Channel, Topic, Asset, Tag, Repeater } from './types';
import { Store } from './store';

export class ContentModule implements Content {

  private log: Logging;
  private token: string;
  private url: string;
  private account: Account;
  private emitter: EventEmitter;

  constructor(log: Logging, token: string, url: string, account: Account, store: Store) {
    this.token = token;
    this.url = url;
    this.log = log;
    this.account = account;
    this.emitter = new EventEmitter();
  }

  public addChannelListener(ev: (channels: Channel[]) => void): void {
    this.emitter.on('channel', ev);
  }

  public removeChannelListener(ev: (channels: Channel[]) => void): void {
    this.emitter.off('channel', ev);
  }

  public close(): void {
  }

  public async setRevision(rev: number): Promise<void> {
    console.log('set content revision:', rev);
  }

  public async addChannel(sealed: boolean, type: string, subject: string, cardIds: string[], groupIds: string[]): Promise<string> {
    return '';
  }

  public async removeChannel(channelId: string): Promise<void> {
  }

  public async setChannelSubject(channelId: string, subject: string): Promise<void> {
  }

  public async setChannelCard(channelId: string, cardId: string): Promise<void> {
  }

  public async clearChannelCard(channelId: string, cardId: string): Promise<void> {
  }

  public async setChannelGroup(channelId: string, groupId: string): Promise<void> {
  }

  public async clearChannelGroup(channelId: string, groupId: string): Promise<void> {
  }

  public async addTopic(channelId: string, type: string, subject: string, assets: Asset[]): Promise<string> {
    return '';
  }

  public async removeTopic(channelId: string, topicId: string): Promise<void> {
  }

  public async flagTopic(channelId: string, topicId: string): Promise<void> {
  }

  public async setTopicSubject(channelId: string, topicId: string, subject: string): Promise<void> {
  }

  public async addTag(channelId: string, topicId: string, type: string, value: string): Promise<string> {
    return '';
  }

  public async removeTag(channelId: string, topicId: string, tagId: string): Promise<void> {
  }

  public async setTagSubject(channelId: string, topicId: string, tagId: string, subject: string): Promise<void> {
  }

  public async flagTag(channelId: string, topicId: string, tagId: string): Promise<void> {
  }

  public async setBlockTopic(channelId: string, topicId: string): Promise<void> {
  }

  public async setBlockTag(channelId: string, topicId: string, tagId: string): Promise<void> {
  }

  public async clearBlockTopic(channelId: string, topicId: string): Promise<void> {
  }

  public async clearBlockTag(channelId: string, topicId: string, tagId: string): Promise<void> {
  }

  public async getBlockedTopics(): Promise<{ channelId: string, topicId: string }[]> {
    return [];
  }

  public async getBlockedTags(): Promise<{ channelId: string, topicId: string, tagId: string }[]> {
    return [];
  }

  public getTopicAssetUrl(channelId: string, topicId: string, assetId: string): string {
    return '';
  }

  public async getTopics(channelId: string): Promise<Topic[]> {
    return [];
  }

  public async getMoreTopics(channelId: string): Promise<Topic[]> {
    return [];
  }

  public async getTags(channelId: string, topicId: string): Promise<Tag[]> {
    return [];
  }

  public async getMoreTags(channelId: string, topicId: string): Promise<Tag[]> {
    return [];
  }

  public async setUnreadChannel(channelId: string): Promise<void> {
  }

  public async clearUnreadChannel(channelId: string): Promise<void> {
  }

  public async addRepeaterAccess(channelId: string, name: string): Promise<Repeater> {
    return { id: '', guid: '', name: '', server: '', token: '' };
  }

  public async removeRepeaterAccess(channelId: string, repeaterId: string): Promise<void> {
  }
}

