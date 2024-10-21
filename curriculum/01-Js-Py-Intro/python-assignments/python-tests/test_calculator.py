import calculator

def test_add():
    assert calculator.calculate(2, 3, "add") == 5
    
def test_subtract():
    assert calculator.calculate(2, 3, "subtract") == -1
    
def test_multiply():
    assert calculator.calculate(10, 2, "multiply") == 20

# Add more functional tests for subtract, multiply, and divide

def test_terminal_output(monkeypatch, capsys):
    # calculator.calculate(10, 2, "multiply")
    monkeypatch.setattr("sys.argv", ["calculator.py", "10", "2", "multiply"])
    calculator.main()
    captured = capsys.readouterr()
    assert captured.out == "Result: 20\n"

def test_argument_passing(monkeypatch):
    monkeypatch.setattr("sys.argv", ["calculator.py", "6", "2", "divide"])
    assert calculator.calculate(6, 2, "divide") == 3.0