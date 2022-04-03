import { IRootState } from ".";

export const selectTypeForm = (state: IRootState) => 
  state.AuthStore.typeForm.type;

export const selectAuthUser = (state: IRootState) => 
  state.AuthStore.authUser;

// export const selectDeleteId = (state: IRootState) =>
//   state.ShowcaseStore.cardForDeleted;

// export const selectIsDeleteMode = (state: IRootState) =>
//   state.ShowcaseStore.isDelete;

// export const selectGetData = (state: IRootState) =>
//   state.ShowcaseStore.data;

// export const selectGetCardsData = (state: IRootState) =>
//   state.ShowcaseStore.processedData;

// export const selectPageNumber = (state: IRootState) =>
//   state.ShowcaseStore.pageNumber;

// export const selectIdCard = (state: IRootState) =>
//   state.ShowcaseStore.idCard;

// export const selectIdAlbum = (state: IRootState) =>
//   state.ShowcaseStore.idAlbum;
