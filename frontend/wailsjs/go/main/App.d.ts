// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {entities} from '../models';
import {openai} from '../models';

export function Conversation(arg1:string,arg2:string,arg3:string):Promise<string>;

export function GetConversationList():Promise<Array<entities.Conversation>>;

export function GetMessageList(arg1:string,arg2:string):Promise<Array<openai.ChatCompletionMessage>>;

export function MessageDialog(arg1:string,arg2:string,arg3:string):Promise<void>;
