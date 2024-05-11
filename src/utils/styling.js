

export const classNames = (...args) => {
    args = args.filter(Boolean);
    console.log(args)
    return args.join(' ');
}

