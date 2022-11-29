# A função maskify() substitui todos os caracteres, menos os ultimos quatro, para "#"
def maskify(string):
    index_cap = len(string) - 4 if len(string) > 4 else 0
    return "".join(['#' for i in range(index_cap)]) + string[index_cap:]
        