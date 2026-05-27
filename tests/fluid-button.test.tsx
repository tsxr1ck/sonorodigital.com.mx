import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FluidButton } from "@/components/ui/fluid-button"

describe("FluidButton", () => {
  it("renders children", () => {
    render(<FluidButton>Click me</FluidButton>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies primary variant by default", () => {
    render(<FluidButton>Primary</FluidButton>)
    const btn = screen.getByRole("button")
    expect(btn.className).toContain("bg-primary")
  })

  it("applies secondary variant", () => {
    render(<FluidButton variant="secondary">Secondary</FluidButton>)
    const btn = screen.getByRole("button")
    expect(btn.className).toContain("bg-secondary")
  })

  it("applies ghost variant", () => {
    render(<FluidButton variant="ghost">Ghost</FluidButton>)
    const btn = screen.getByRole("button")
    expect(btn.className).toContain("bg-transparent")
  })

  it("applies size classes", () => {
    render(<FluidButton size="lg">Large</FluidButton>)
    const btn = screen.getByRole("button")
    expect(btn.className).toContain("h-[52px]")
  })

  it("renders as a button with type button by default", () => {
    render(<FluidButton>Test</FluidButton>)
    const btn = screen.getByRole("button")
    expect(btn).toHaveAttribute("type", "button")
  })

  it("calls onClick handler", async () => {
    const user = userEvent.setup()
    let clicked = false
    render(<FluidButton onClick={() => { clicked = true }}>Click</FluidButton>)
    await user.click(screen.getByRole("button"))
    expect(clicked).toBe(true)
  })

  it("merges className prop", () => {
    render(<FluidButton className="custom-class">Styled</FluidButton>)
    const btn = screen.getByRole("button")
    expect(btn.className).toContain("custom-class")
  })

  it("supports disabled state", () => {
    render(<FluidButton disabled>Disabled</FluidButton>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
