import { create } from "zustand";

export const useObjectStore = create((set) => ({
  object: {},

  add: (key, value) => set((state) => ({ object: { ...state.object, value } })),

  update: (key, value) =>
    set((state) => ({
      object: {
        ...state.object,
        [key]: value,
      },
    })),

  remove: (key) =>
    set((state) => {
      const newObject = { ...state.object };
      delete newObject[key];
      return { object: newObject };
    }),

  clear: () => set({ object: {} }),
}));

export const useEditStore = create((set) => ({
  editData: null,
  isEditModalOpen: false,
  setEditData: (data) => set({ editData: data, isEditModalOpen: true }),
  closeEditModal: () => set({ isEditModalOpen: false }),
}));
