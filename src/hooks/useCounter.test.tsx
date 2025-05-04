import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./userCount";

describe("useCounter", () => {
  test("should render the initial count 0", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    expect(result.current.count).toBe(0);
  });

  test("should render the initial count 10", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));
    expect(result.current.count).toBe(10);
  });

  test("increment the count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));
    act(() => result.current.increment());
    expect(result.current.count).toBe(11);
  });

  test("decrease the count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(9);
  });
});
