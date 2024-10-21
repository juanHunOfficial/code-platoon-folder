import linear_search
import pytest

@pytest.mark.parametrize(
    ("num_passed",      "arr_passed",       "expected_index"),
    (
        (5,         [1,5,6,3,78,7,0,200,4],     1),
        (6,         [1,5,6,3,78,7,0,200,4],     2),
        (78,        [1,5,6,3,78,7,0,200,4],     4),
        (0,         [1,5,6,3,78,7,0,200,4],     6),
        (4,         [1,5,6,3,78,7,0,200,4],     8),
        (1,         [1,5,6,3,78,7,0,200,4],     0),
        (10000,     [1,5,6,3,78,7,0,200,4],     -1)
    )
)

def test_linear_search(num_passed, arr_passed, expected_index):
    assert linear_search.linear_search(num_passed, arr_passed) == expected_index