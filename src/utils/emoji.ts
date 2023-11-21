const emojiMap = {
  dev: '💡',
  serve: '💡',
  build: '📦',
  test: '🧪',
  lint: '🔍',
  check: '🔍',
  release: '🎉',
  publish: '🎉',
  preview: '👀',
  inspect: '👀',
  start: '🚀',
  format: '📝',
  clean: '🗑️ ',
}

export function setEmoji(command: string) {
  let newCommand = command

  for (const [key, value] of Object.entries(emojiMap)) {
    if (command.includes(key))
      newCommand = `${value} ${command}`
  }

  return newCommand
}
