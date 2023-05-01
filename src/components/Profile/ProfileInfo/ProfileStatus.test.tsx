import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus Component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'old status'} updateStatus={() => "#"} /> )
        const root = component.getInstance()

        //@ts-ignore
        expect(root?.state.statusValue).toBe('old status')
    });
    test('after creation span with status should be displayed', () => {
        const component = create(<ProfileStatus status={'old status'} updateStatus={() => "#"} /> )
        const root = component.root
        const span = root?.findByType("span")

        expect(span).not.toBeNull()
    });
    test('after creation input  shouldn`t be displayed', () => {
        const component = create(<ProfileStatus status={'old status'} updateStatus={() => "#"} /> )
        const root = component.root

        expect(() => {
            const input = root?.findByType("input")
        }).toThrow()
    });
    test('after creation span should contains correct status', () => {
        const component = create(<ProfileStatus status={'old status'} updateStatus={() => "#"} /> )
        const root = component.root
        const span = root?.findByType("span")

        expect(span?.children[0]).toBe('old status')
    })
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'old status'} updateStatus={() => "#"} /> )
        const root = component.root
        const span = root?.findByType("span")
        span?.props.onDoubleClick()
        const input = root?.findByType("input")
        expect(input?.props.value).toBe('old status')
    })
    test('callBack should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'old status'} updateStatus={mockCallback} /> )
        const instance = component.getInstance()
        //@ts-ignore
        instance?.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})