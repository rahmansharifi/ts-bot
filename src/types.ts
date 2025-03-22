export type LinkPreviewOptions = {
  is_disabled: boolean;
};

export type OutgoingMessage = {
  chat_id: number;
  text: string;
  parse_mode?: string;
  link_preview_options?: LinkPreviewOptions;
};
