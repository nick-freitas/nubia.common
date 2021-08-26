export enum GamebookEventType {
  CREATE_GAMEBOOK = "gamebook:create",
  GAMEBOOK_CREATED = "gamebook:created",
  UPDATE_GAMEBOOK = "gamebook:update",
  GAMEBOOK_UPDATED = "gamebook:updated",
  RESET_GAMEBOOK_CHOICES = "gamebook:reset_choices",
  UNDO_LAST_GAMEBOOK_CHOICE = "gamebook:undo_last_choice",
  MAKE_GAMEBOOK_CHOICE = "gamebook:make_choice",
}
