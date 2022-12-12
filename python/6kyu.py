# A função array_diff() subtrai uma lista pela outra e retorna o resultado
def array_diff(a, b):
    return [el for el in a
            if not b.count(el)]


print(array_diff([3, 5, 2, 5, 1, 1], [1, 3, 2, 2, 4, 9]))
