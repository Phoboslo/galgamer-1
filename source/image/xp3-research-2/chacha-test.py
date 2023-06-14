from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import os, struct, re, string

def fmt_hex(data: bytes) -> str:
    return ' '.join(['{:02X}'.format(byte) for byte in data])
    print(result)

def pad_text(text: str, length: int) -> str:
    padded_text = text.ljust(length)
    return padded_text

def format_text(left_text: str, right_text: str) -> str:

    left_lines = [left_text[i:i + 48] for i in range(0, len(left_text), 48)]
    right_lines = [right_text[i:i + 16] for i in range(0, len(right_text), 16)]

    max_lines = max(len(left_lines), len(right_lines))

    formatted_lines = []

    for i in range(max_lines):
        left_line = left_lines[i] if i < len(left_lines) else ''
        right_line = right_lines[i] if i < len(right_lines) else ''

        left_line = pad_text(left_line, 48)

        line_number = hex(i*16)[2:].zfill(4) + 'h'

        formatted_line = '{:<6s} {:<48s}   {:<16s}'.format(line_number,left_line, right_line)
        formatted_lines.append(formatted_line)

    result = '\n'.join(formatted_lines)
    return result

FILTER = ''.join([['.', chr(x)][chr(x) in string.printable[:-5]] for x in range(256)])
# FILTER = '................................'

def print_hex(data: bytes):

    printable = data.decode('latin-1',errors='ignore')
    printable = re.sub(r'[\x00-\x1F]', '.', printable)
    printable = printable.translate(FILTER)
    print(format_text(fmt_hex(data), printable), '\n')


def main():
    key = b''
    for i in range(32):
        key += struct.pack('B', i)
    print(f'The key is:')
    print_hex(key)
    
    blockoffset = 0
    count = struct.pack('i', blockoffset)
    nonce = count + b'\xAA' * 12 # + b'\1'

    print(f'The nonce is:')
    print_hex(nonce)

    algorithm = algorithms.ChaCha20(key, nonce)
    cipher = Cipher(algorithm, mode=None)
    encryptor = cipher.encryptor()
    ct = encryptor.update(b'Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic systems and protocols.')

    print(f'The keystream from offset {blockoffset * 64} bytes is:')
    print(fmt_hex(ct))
    return

    decryptor = cipher.decryptor()
    decryptor.update(ct)
    


main()