import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { TonalCard } from "@/components/ui/tonal-card"

describe("TonalCard", () => {
  it("renders title and description", () => {
    render(
      <TonalCard title="Card Title" description="Card description text" />,
    )
    expect(screen.getByText("Card Title")).toBeInTheDocument()
    expect(screen.getByText("Card description text")).toBeInTheDocument()
  })

  it("renders icon when provided", () => {
    render(
      <TonalCard
        icon={<span data-testid="test-icon">*</span>}
        title="With Icon"
      />,
    )
    expect(screen.getByTestId("test-icon")).toBeInTheDocument()
  })

  it("renders children content", () => {
    render(
      <TonalCard title="Has Children">
        <p data-testid="child-content">Child paragraph</p>
      </TonalCard>,
    )
    expect(screen.getByTestId("child-content")).toBeInTheDocument()
  })

  it("renders without title gracefully", () => {
    render(
      <TonalCard>
        <p>Just content</p>
      </TonalCard>,
    )
    expect(screen.getByText("Just content")).toBeInTheDocument()
    expect(screen.queryByRole("heading")).toBeNull()
  })

  it("applies shadow-card class", () => {
    const { container } = render(<TonalCard title="Shadow" />)
    expect(container.firstChild).toHaveClass("shadow-card")
  })

  it("applies interactive classes when interactive prop is true", () => {
    const { container } = render(
      <TonalCard title="Interactive Card" interactive />,
    )
    expect(container.firstChild).toHaveClass("cursor-pointer")
    expect(container.firstChild).toHaveClass("hover:shadow-card-hover")
  })

  it("does not apply interactive classes by default", () => {
    const { container } = render(<TonalCard title="Static Card" />)
    expect(container.firstChild).not.toHaveClass("cursor-pointer")
  })
})
