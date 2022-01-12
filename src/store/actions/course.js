export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    payload: {
      module,
      lesson,
    },
  };
}
