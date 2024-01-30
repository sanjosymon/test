import hashlib

def hash_string(input_string, hash_algorithm='sha256'):
    """
    Hashes the input string using the specified hash algorithm.

    Parameters:
    - input_string: The string to be hashed.
    - hash_algorithm: The hash algorithm to use (default is SHA-256).

    Returns:
    - The hashed string.
    """
    hash_object = hashlib.new(hash_algorithm)
    hash_object.update(input_string.encode('utf-8'))
    hashed_string = hash_object.hexdigest()
    return hashed_string

if __name__ == "__main__":
    # Example usage:
    input_string = input("Enter a string to hash: ")
    hashed_result = hash_string(input_string)
    print(f"Hashed result using SHA-256: {hashed_result}")
