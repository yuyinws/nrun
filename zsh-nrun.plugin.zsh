function _zsh_nrun() {
    if [[ $BUFFER =~ '^npm run $|^npm $|^yarn $|^yarn run $|^pnpm run $|^pnpm $|^nr $|^bun run $|^bun $' && -f ./package.json ]]; then
        zle accept-line
        BUFFER="nrun"
        zle accept-line
    else
        zle self-insert
    fi
}

zle -N _zsh_nrun

bindkey " " _zsh_nrun
