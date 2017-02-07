def set_encoding(encoding='utf-8'):
    import sys
    reload(sys)
    sys.setdefaultencoding(encoding)
