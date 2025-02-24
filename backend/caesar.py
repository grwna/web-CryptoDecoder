import string

LOWER_MODULO = ord('a')
UPPER_MODULO = ord('A')

def caesar_cipher(text, key="brute"):
    """ Caesar Cipher on a string, if key = "brute" then uses brute force\n
        Returns a string or list of strings"""
    def caesar(text, key):
        result = ""
        for char in text:
            if char in string.ascii_lowercase:
                new_ord = (ord(char) - LOWER_MODULO + key) % 26
                new_char = chr(new_ord + LOWER_MODULO)
            elif char in string.ascii_uppercase:
                new_ord = (ord(char) - UPPER_MODULO + key) % 26
                new_char = chr(new_ord + UPPER_MODULO)
            else:
                new_char = char
            result += new_char
        return result

    if key == "brute":
        results = []
        for key in range(1,26):
            results.append(caesar(text,key))
        return results
    else:
        return caesar(text,key)