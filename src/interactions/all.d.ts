import type {
	UserCommands, MessageCommands, ChatInputCommands,
	AnyCommandHandler,
} from 'slshx';


export declare interface CommandCollection {
	userCommands: UserCommands;
	messageCommands: MessageCommands;
	commands: ChatInputCommands;
}

export declare interface ExportedCommandModule {
	default(): AnyCommandHandler;
}