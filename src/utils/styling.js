

export const classNames = (...args) => {
    args = args.filter(Boolean);
    return args.join(' ');
}

